
	document.querySelectorAll('*').forEach(div => {
		div.classList.forEach(cls => {
			
			
			//color
			if (cls.startsWith('c#')) {
				const color = cls.split('#')[1];
				div.style.color = /^[a-zA-Z]+$/.test(color) ? color : `#${color}`;
			}
			
			
			//background
			if (cls.startsWith('b#')) {
				const bg = cls.split('#')[1];
				div.style.background = /^[a-zA-Z]+$/.test(bg) ? bg : `#${bg}`;
			}
			
			
			//width
			if (cls.startsWith('w#')) {
				const width = cls.split('#')[1];
				div.style.width = width;
			}
			
			
			//height
			if (cls.startsWith('h#')) {
				const height = cls.split('#')[1];
				div.style.height = height;
			}
			
			
			// Border Radius
			if (cls.startsWith('b-r#')) {
				const borderRadius = cls.split('#')[1];
				div.style.borderRadius = borderRadius;
			}
			if (cls.startsWith('btrr#')) {
				const borderTopRightRadius = cls.split('#')[1];
				div.style.borderTopRightRadius = borderTopRightRadius;
			}
			if (cls.startsWith('btlr#')) {
				const borderTopLeftRadius = cls.split('#')[1];
				div.style.borderTopLeftRadius = borderTopLeftRadius;
			}
			if (cls.startsWith('bbrr#')) {
				const borderBottomRightRadius = cls.split('#')[1];
				div.style.borderBottomRightRadius = borderBottomRightRadius;
			}
			if (cls.startsWith('bblr#')) {
				const borderBottomLeftRadius = cls.split('#')[1];
				div.style.borderBottomLeftRadius = borderBottomLeftRadius;
			}
			
			
			//padding
			if (cls.startsWith('p#')) {
				const padding = cls.split('#')[1];
				div.style.padding = padding;
			}
			if (cls.startsWith('pt#')) {
				const paddingTop = cls.split('#')[1];
				div.style.paddingTop = paddingTop;
			}
			if (cls.startsWith('pr#')) {
				const paddingRight = cls.split('#')[1];
				div.style.paddingRight = paddingRight;
			}
			if (cls.startsWith('pb#')) {
				const paddingBottom = cls.split('#')[1];
				div.style.paddingBottom = paddingBottom;
			}
			if (cls.startsWith('pl#')) {
				const paddingLeft = cls.split('#')[1];
				div.style.paddingLeft = paddingLeft;
			}
			
			
			//margin
			if (cls.startsWith('m#')) {
				const margin = cls.split('#')[1];
				div.style.margin = margin;
			}
			if (cls.startsWith('mt#')) {
				const marginTop = cls.split('#')[1];
				div.style.marginTop = marginTop;
			}
			if (cls.startsWith('mr#')) {
				const marginRight = cls.split('#')[1];
				div.style.marginRight = marginRight;
			}
			if (cls.startsWith('mb#')) {
				const marginBottom = cls.split('#')[1];
				div.style.marginBottom = marginBottom;
			}
			if (cls.startsWith('ml#')) {
				const marginLeft = cls.split('#')[1];
				div.style.marginLeft = marginLeft;
			}
			
			
			//border color
			if (cls.startsWith('bc#')) {
				const borderColor = cls.split('#')[1];
				div.style.borderColor = /^[a-zA-Z]+$/.test(borderColor) ? borderColor : `#${borderColor}`;
			}
			//border style
			if (cls.startsWith('bs#')) {
				const borderStyle = cls.split('#')[1];
				div.style.borderStyle = /^[a-zA-Z]+$/.test(borderStyle) ? borderStyle : `#${borderStyle}`;
			}
			//border width
			if (cls.startsWith('bw#')) {
				const borderWidth = cls.split('#')[1];
				div.style.borderWidth = borderWidth;
			}
			if (cls.startsWith('btw#')) {
				const borderTopWidth = cls.split('#')[1];
				div.style.borderTopWidth = borderTopWidth;
			}
			if (cls.startsWith('brw#')) {
				const borderRightWidth = cls.split('#')[1];
				div.style.borderRightWidth = borderRightWidth;
			}
			if (cls.startsWith('bbw#')) {
				const borderBottomWidth = cls.split('#')[1];
				div.style.borderBottomWidth = borderBottomWidth;
			}
			if (cls.startsWith('blw#')) {
				const borderLeftWidth = cls.split('#')[1];
				div.style.borderLeftWidth = borderLeftWidth;
			}
			
			
			//outline
			if (cls.startsWith('ow#')) {
				const outlineWidth = cls.split('#')[1];
				div.style.outlineWidth = outlineWidth;
			}
			if (cls.startsWith('os#')) {
				const outlineStyle = cls.split('#')[1];
				div.style.outlineStyle = outlineStyle;
			}
			if (cls.startsWith('oc#')) {
				const outlineColor = cls.split('#')[1];
				div.style.outlineColor = outlineColor;
			}
			if (cls.startsWith('oo#')) {
				const outlineOffset = cls.split('#')[1];
				div.style.outlineOffset = outlineOffset;
			}
			
			//top right buttom left
			if (cls.startsWith('top#')) {
				const top = cls.split('#')[1];
				div.style.top = top;
			}
			if (cls.startsWith('right#')) {
				const right = cls.split('#')[1];
				div.style.right = right;
			}
			if (cls.startsWith('buttom#')) {
				const buttom = cls.split('#')[1];
				div.style.buttom = buttom;
			}
			if (cls.startsWith('left#')) {
				const left = cls.split('#')[1];
				div.style.left = left;
			}
			
		});
	});
//border code example border 2px solid red
  document.querySelectorAll('[class*="b#"]').forEach(el => {
    const classList = Array.from(el.classList);
    classList.forEach(cls => {
      if (cls.startsWith("b#")) {
        const parts = cls.split("#");
        const [_, width, style, color] = parts;
        el.style.border = `${width} ${style} ${color}`;
      }
    });
  });
//border code example border 2px solid red
  document.querySelectorAll('[class*="o#"]').forEach(el => {
    const classList = Array.from(el.classList);
    classList.forEach(cls => {
      if (cls.startsWith("o#")) {
        const parts = cls.split("#");
        const [_, width, style, color] = parts;
        el.style.outline = `${width} ${style} ${color}`;
      }
    });
  });
