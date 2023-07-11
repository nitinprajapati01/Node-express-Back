import { Server as HttpServer } from "http"
import { Server as SocketServer } from "socket.io";
import debug from "debug";
import { helpersErrorHandler } from "./errorHandlers";
import { initSocketFailed } from "../lang/socket/errors";

const debugLog = debug("socket.ts");
const errorLog = debug("socket.ts:error");

export interface Task {
    id: string,
    msg: string,
    isDone: boolean,
}
  
export const initSocket = (httpServer: HttpServer) => {
    try {
        debugLog("in initSocket");
        const io = new SocketServer(httpServer, {
            cors: {
                origin: "http://localhost:3000",
            }
        });

        io.on("connection", socket => {
            const ioConnectionDebugLog = debugLog.extend("io-connection");
            ioConnectionDebugLog("socket connected:", socket.id);
            ioConnectionDebugLog("io.engine.clientsCount:", io.engine.clientsCount);

            socket.emit("connection-acknowledgement", "hi client!");

            socket.on("execute-expensive-task", (task: Task) => {
                const executeExpensiveTaskDebugLog = ioConnectionDebugLog.extend("execute-expensive-task");
                executeExpensiveTaskDebugLog("task:", task);

                setTimeout(
                    () => {
                        task.isDone = true;
                        executeExpensiveTaskDebugLog("done task:", task);

                        socket.emit("expensive-task-executed", task);   // responding to the same socket channel client.
                    }, 
                    Math.random()*100000,
                );
            });
        });
    } catch(err) {
        helpersErrorHandler(err, initSocketFailed, errorLog);
    }
} 