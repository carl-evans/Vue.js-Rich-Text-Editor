Vue.component("wysiwyg", {
    data: function() {
      return {
        content: "        Once upon a time "
      };
    },
  
    methods: {
      insertTab: function(e) {
        e.preventDefault();
        document.execCommand("insertHTML", false, "&#009");
      },
  
      bold: function() {
        document.execCommand("bold");
      },
  
      italic: function() {
        document.execCommand("italic");
      },
  
      underline: function() {
        document.execCommand("underline");
      },
  
      justifyLeft: function() {
        document.execCommand("justifyLeft");
      },
  
      justifyCenter: function() {
        document.execCommand("justifyCenter");
      },
  
      justifyRight: function() {
        document.execCommand("justifyRight");
      },
  
      insertList: function() {
        document.execCommand("insertOrderedList");
      }
    },
  
    template: `
        <div class="wysiwyg">
            <ul class="wysiwyg__controls">
              <li><button @click="bold"><i class="fa fa-bold" title="Make selected text bold"></i></button></li>
              <li><button @click="italic"><i class="fa fa-italic" title="Make selected text italic"></i></button></li>
              <li><button @click="underline"><i class="fa fa-underline" title="Underline selected text"></i></button></li>
              <li><button @click="justifyLeft"><i class="fa fa-align-left" title="Align text left"></i></button</li>
              <li><button @click="justifyCenter"><i class="fa fa-align-center" title="Center align text"></i></button></li>
              <li><button @click="justifyRight"><i class="fa fa-align-right" title="Align text right"></i></button></li>
              <li><button @click="insertList"><i class="fa fa-list-ol" title="Insert ordered list"></i></button></li>
            </ul>
        
            <div @keydown.tab="insertTab($event)" v-model="content" class="wysiwyg__content" contentEditable>{{ content }}</div>
        </div>
        `
    });
  
  new Vue({ el: "#wysiwyg" });