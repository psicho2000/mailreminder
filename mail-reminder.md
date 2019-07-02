# App mail-reminder
## Build & start
g :server-side:jar
java -jar server-side/build/libs/server-side-1.0-SNAPSHOT.jar

## Exception
    Error: A JNI error has occurred, please check your installation and try again
    Exception in thread "main" java.lang.NoClassDefFoundError: org/jetbrains/ktor/application/Application
            at java.lang.Class.getDeclaredMethods0(Native Method)
            at java.lang.Class.privateGetDeclaredMethods(Unknown Source)
            at java.lang.Class.privateGetMethodRecursive(Unknown Source)
            at java.lang.Class.getMethod0(Unknown Source)
            at java.lang.Class.getMethod(Unknown Source)
            at sun.launcher.LauncherHelper.validateMainClass(Unknown Source)
            at sun.launcher.LauncherHelper.checkAndLoadMain(Unknown Source)
    Caused by: java.lang.ClassNotFoundException: org.jetbrains.ktor.application.Application
            at java.net.URLClassLoader.findClass(Unknown Source)
            at java.lang.ClassLoader.loadClass(Unknown Source)
            at sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)
            at java.lang.ClassLoader.loadClass(Unknown Source)
            ... 7 more

# App mailreminder
Start with `ng serve` or `npm run start` or use the npm Tool Window and click start.
For debugging, create a Run Configuration "JavaScript Debug"´for URL: http://localhost:4200. Then, start app and run debugging config.

## Endpoints
    GET reminders/10 (ggf. mit default)
        [
            {
                "year": "2019",
                "week": "1",
                "from": "01.01.",
                "to": "07.01.",
                "persons": [
                    "Lydia",
                    "Markus"
                ]
            },
            {
                "year": "2019",
                "week": "2",
                "from": "08.01.",
                "to": "14.01.",
                "persons": null
            }
        ]
    POST reminders
    GET autocomplete/str (findByEmail, infix)

## ToDos
1. Angular-App
1. Backend (Spring Boot 2 / Java 12 / Maven)
Optional
1. Gradle
1. Kotlin
1. Überflüssige Projekte aufräumen

## ToDos Angular-App
* Read Steyer's Workshop material
---
* Read table input from backend
* Create input field into cell
* Use chips for persons
---
* Create subdirs for services, datasources, components
* One global module or many modules? What's the architecture?
