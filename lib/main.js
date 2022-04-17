const {AutoLanguageClient} = require('atom-languageclient')
const cp = require('child_process')
const OS = require('os');
const path = require('path');

class CLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.c', 'source.cpp' ] }
  getLanguageName () { return 'C / C++' }
  getServerName () { return atom.config.get("ide-c-cpp.languageServerCmd") }

  getInitializeParams(projectPath, process) {
    const params = super.getInitializeParams(projectPath, process);

    let cacheDir = atom.config.get("ide-c-cpp.cacheDirectory");

    params.initializationOptions = {
      cacheDirectory: cacheDir ? cacheDir : path.join(OS.tmpdir(), this.getServerName()),
      cacheFormat: atom.config.get("ide-c-cpp.cacheFormat"),
    };

    console.log(params);
    return params;
  }

  startServerProcess (projectPath) {
    let languageDirectory = atom.config.get("ide-c-cpp.languageServerDirectory");
    let cmd = atom.config.get('ide-c-cpp.languageServerCmd');

    if (process.platform == 'win32') cmd += '.exe';

    if (languageDirectory != "") {
      cmd = path.join(languageDirectory, cmd);
    }

    console.log(`Starting server ${cmd} in project ${projectPath}.`);
    return cp.spawn(cmd, [], { cwd: projectPath });
  }
}

module.exports = new CLanguageClient();
