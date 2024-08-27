import {bootstrap} from "./DependencyInjection/DiRepository/index.js";
import {checkDirectoryExist} from "./CheckDirectoryExist/index.js";

const isCheckDirectoryExist = checkDirectoryExist()

isCheckDirectoryExist.length > 0 ? console.log(isCheckDirectoryExist): bootstrap.Start(3030 , '127.0.0.1')
