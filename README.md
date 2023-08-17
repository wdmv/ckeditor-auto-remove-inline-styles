<div  id="top"></div>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url] [![MIT License][license-shield]][license-url] [![Issues][issues-shield]][issues-url] [![Current Version][version-shield]][version-url]

# Introduction

This is a plugin to automatically remove all the inline styles when pasting content into CKEditor 5.

For instance, when copying and pasting from MS Word, and the use case of the editor is that elements entered into the editor have a normalized common look throughout the application, it can cause weird issues since word will insert its own inline styling.

# Installation

Using npm:

```bash
npm i @wdmv/ckeditor-auto-remove-inline-styles
```

Using yarn:

```bash
yarn add @wdmv/ckeditor-auto-remove-inline-styles
```

Using the plugin

```javascript
import AutoRemoveInlineStyles from "@wdmv/ckeditor-auto-remove-inline-styles";

ClassicEditor.create(document.querySelector("#editor"), {
	plugins: [AutoRemoveInlineStyles /* ... */],
})
	.then(/_ ... _/)
	.catch(/_ ... _/);
```

[contributors-shield]: https://img.shields.io/github/contributors/wdmv/ckeditor-auto-remove-inline-styles?style=for-the-badge
[contributors-url]: https://github.com/wdmv/ckeditor-auto-remove-inline-styles/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/wdmv/ckeditor-auto-remove-inline-styles?style=for-the-badge
[forks-url]: https://github.com/wdmv/ckeditor-auto-remove-inline-styles/network/members
[stars-shield]: https://img.shields.io/github/stars/wdmv/ckeditor-auto-remove-inline-styles?style=for-the-badge
[stars-url]: https://github.com/wdmv/ckeditor-auto-remove-inline-styles/stargazers
[issues-shield]: https://img.shields.io/github/issues/wdmv/ckeditor-auto-remove-inline-styles?style=for-the-badge
[issues-url]: https://github.com/wdmv/ckeditor-auto-remove-inline-styles/issues
[license-shield]: https://img.shields.io/github/license/wdmv/ckeditor-auto-remove-inline-styles?style=for-the-badge&1
[license-url]: https://github.com/wdmv/ckeditor-auto-remove-inline-styles/blob/main/LICENSE
[version-shield]: https://img.shields.io/npm/v/@wdmv/ckeditor-auto-remove-inline-styles?label=Current%20Version&style=for-the-badge
[version-url]: https://www.npmjs.com/package/@wdmv/ckeditor-auto-remove-inline-styles
