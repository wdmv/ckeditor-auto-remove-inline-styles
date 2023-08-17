import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

class AutoRemoveInlineStyles extends Plugin {
	init() {
		const editor = this.editor;

		function removeInlinestyles(children: any) {
			for (const child of children) {
				child.removeAttribute("style");
				child.removeAttribute("lang");
				child.removeAttribute("dir");
				if (child.children.length) {
					removeInlinestyles(child.children);
				}
			}
		}

		editor.editing.view.document.on("clipboardInput", (evt, data) => {
			const dataTransfer = data.dataTransfer;
			const htmlContent = dataTransfer.getData("text/html");

			if (!htmlContent) {
				return;
			}

			const parser = new DOMParser();

			const parsedDoc = parser.parseFromString(htmlContent, "text/html");

			removeInlinestyles(parsedDoc.body.children);

			const cleanedContent = parsedDoc.body.innerHTML;

			data.content =
				this.editor.data.htmlProcessor.toView(cleanedContent);
		});
	}
}
export default AutoRemoveInlineStyles;
