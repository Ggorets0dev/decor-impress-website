import path from 'path'
import { createLogger, format, transports } from 'winston'

const __dirname = path.resolve()

const logger = createLogger({
    transports: [
        new transports.Console({
            format:  format.combine(
                format.timestamp(),
                format.colorize(),
                format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
            )
        }),
        new transports.File({
            level: 'info',
            filename: path.resolve(__dirname, 'logs', 'server.log')
        })
    ],
    format:  format.combine(
        format.timestamp(),
        format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
    )
})

export default logger