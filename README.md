# Atom IDE - C / C++ Language Support
This package provides a language client for C and C++, via the CCLS or CQuery language servers.

This package can be used out-of-the-box with Atom IDE, and perhaps with any plugin that supports [atom-languageclient](https://github.com/atom/atom-languageclient).

# Setup

To use this plugin, you need to have [CCLS](https://github.com/MaskRay/ccls) or [CQuery](https://github.com/cquery-project/cquery) installed and in your `PATH`.

You will also need to generate a suitable set of [compile commands](https://github.com/MaskRay/ccls/wiki/compile_commands.json).

If you have completed both of these steps, simply select your preferred provider in the package settings, and _voila_, it should work.

# Troubleshooting

If the package fails to work (check the debug console), please verify that either the `ccls` or `cquery` binaries are present in your PATH and run correctly. If you still can't get it to work, open an [issue](https://github.com/web-eworks/ide-c-cpp/issues/new) in the project's repository.

# License

This package is provided under the MIT License, copyright Web eWorks, LTD.
