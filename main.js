// CODED BY HEMANTH N

marked.setOptions({
  gfm: true,
  highlight: false,
  tables: false,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  langPrefix: false
});

$(document).ready(() => {
  let editor = $("#editor");
  let preview = $("#preview");

  /**
   * Setting preview with editor values.
   */

  const setPreview = () => {
    let value = editor.val();

    preview.html(marked(value));
  };

  

  const changeSize = id => {
    let button = $(id);

    if (button.attr("class").includes("col-md-6")) {
      button.removeClass("col-md-6").addClass("col-md-12");
    } else {
      button.removeClass("col-md-12").addClass("col-md-6");
    }
  };

  

  const render = () => {
    $("#editor").on("input", () => {
      setPreview();
    });

    $("#button-1").on("click", () => {
      changeSize("#block-one");
    });

    $("#button-2").on("click", () => {
      changeSize("#block-two");
    });
  };

  render();
  setPreview();
});
