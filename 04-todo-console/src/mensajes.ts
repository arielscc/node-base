// import colors = require("colors");
// import readLine = require("readline");

// export const mostrarMenu = (): Promise<string> => {
//   console.clear();
//   return new Promise(resolve => {
//     console.clear()
//     console.log( "============================".green)
//     console.log("   Seleccione una opción".green)
//     console.log("============================".green)

//     console.log(`${"1.".green} Crear tarea`)
//     console.log(`${"2.".green} Listar tareas`)
//     console.log(`${"3.".green} Listar tareas completadas`)
//     console.log(`${"4.".green} Listar tareas pendientes`)
//     console.log(`${"5.".green} Completar tarea(s)`)
//     console.log(`${"6.".green} Borrar tareas`)
//     console.log(`${"0.".green} Salir`)

//     const nextLine = readLine.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     })

//     const ac = new AbortController();
//     const signal = ac.signal;

//     nextLine.question('What is your favorite food? ', { signal }, (answer) => {
//       console.log(`Oh, so your favorite food is ${answer}`);
//       nextLine.close()
//       resolve(answer)
//     });

//     signal.addEventListener('abort', () => {
//       console.log('The food question timed out');
//       nextLine.close()
//     }, { once: true });

//     setTimeout(() => ac.abort(), 10000);

//   })
// }

// export const pausa = () => {
//   return new Promise<void>(resolve => {
//     const nextLine = readLine.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     nextLine.question(`\nPresione ${"Enter".green} para continuar\n`, opt => {
//       nextLine.close()
//       resolve()
//     })
//   })
// }
