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
            <li><button @click="bold"><i class="fa fa-bold"></i></button></li>
            <li><button @click="italic"><i class="fa fa-italic"></i></button></li>
            <li><button @click="underline"><i class="fa fa-underline"></i></button></li>
            <li><button @click="justifyLeft"><i class="fa fa-align-left"></i></button</li>
            <li><button @click="justifyCenter"><i class="fa fa-align-center"></i></button></li>
            <li><button @click="justifyRight"><i class="fa fa-align-right"></i></button></li>
            <li><button @click="insertList"><i class="fa fa-list-ol"></i></button></li>
            </ul>
        
            <div @keydown.tab="insertTab($event)" v-model="content" class="wysiwyg__content" contentEditable>{{ content }}</div>
        </div>
        `
    });
  
  new Vue({ el: "#wysiwyg" });