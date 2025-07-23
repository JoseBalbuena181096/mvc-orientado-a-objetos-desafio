import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: null,
    params: null,
  };
}

function main() {
  const controller = new ContactsController();
  //console.log(controller.contacts.getAll());
  const options = parseaParams(process.argv);
  const result = controller.processOptions(options);
  console.log(result);
}

main();
