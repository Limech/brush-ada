

SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

SyntaxHighlighter.brushes.Custom = function()
{
    
  var datatypes = 'Integer Float Duration Character String Boolean';

  var keywords = 'abort abs abstract accept access aliased all and array at begin body case' +
           'constant declare delay delta digits do else elsif end entry exception exit for' +
           'function generic goto if in interface is limited loop mod new not null of or others' +
           'out overriding package pragma private procedure protected raise range record rem renames' +
           'requeue return reverse select separate some subtype synchronized tagged task terminate' +
           'then type until use when while with xor';

  var functions = 'begin continue switch break result finally raise while then case else goto' +
           'and for try xor not end as do if or in is to downto';

  this.regexList = [
    {
      regex: SyntaxHighlighter.regexLib.singleLineCComments,
      css: 'comments'
    },
    {
      regex: SyntaxHighlighter.regexLib.multiLineCComments,
      css: 'comments'
    },
    {
      regex: SyntaxHighlighter.regexLib.doubleQuotedString,
      css: 'string'
    },
    {
      regex: SyntaxHighlighter.regexLib.singleQuotedString,
      css: 'string'
    },
    {
      regex: /^ *#.*/gm,
      css: 'preprocessor'
    },
    {
      regex: /--.*$/gm,
      css: 'comments'
    },
    {
      regex: new RegExp(this.getKeywords(datatypes), 'gm'),
      css: 'color1 bold'
    },
    {
      regex: new RegExp(this.getKeywords(functions), 'gm'),
      css: 'functions bold'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword bold'
    }
   ];
};

SyntaxHighlighter.brushes.Custom.prototype  = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Custom.aliases  = ['ada'];