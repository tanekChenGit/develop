package com.currency.dashboard

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import io.ktor.routing.*

fun main(){
    embeddedServer(Netty, port = 3000) {
        routing {
            get("/"){
                call.respondText("Currency Dashboard API")
            }
        }
    }.start(wait = true)
}
