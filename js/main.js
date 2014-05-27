
			var srcs = {
			
				'd': './img/d.gif',
				'i': './img/i.gif',
				'n': './img/n.gif',
				'o': './img/o.gif',
				's': './img/s.gif',
				'r': './img/r.gif',
				'w': './img/w.gif',
				' ': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII='


			};

			var input = document.getElementById( 'text' );
			input.focus();
			input.value = '';
			var con = document.getElementById('font');
			var container = document.createElement( 'div' );
			container.id = 'block';
			container.style.width = '100%';
			container.style.height = '100%';
			container.style.display = 'table';
			container.style.textAlign = 'center';
			con.appendChild( container );

			var pad = document.createElement( 'div' );
			pad.style.display = 'table-cell';
			pad.style.verticalAlign = 'middle';
			container.appendChild( pad );

			var currentString = '';

			var type = function ( string ) {

				if ( string === currentString ) return;

				currentString = string;

				while ( pad.childNodes.length > 0 ) {

					pad.removeChild( pad.firstChild );

				}

				var chars = string.split( '' );

				for ( var i = 0; i < chars.length; i ++ ) {

					var char = chars[ i ];
					
					if ( char === '\n' ) {

						var br = document.createElement( 'br' );
						pad.appendChild( br );

						continue;
					
					}

					var src = srcs[ char.toLowerCase() ];

					if ( src !== undefined ) {

						var img = document.createElement( 'img' );
						img.width = 130;
						img.src = src;
						pad.appendChild( img );

					}

				}

				var cursor = document.createElement( 'div' );
				cursor.id = 'cursor';
				pad.appendChild( cursor );

			};

			type( input.value );

			document.addEventListener( 'keydown', function ( event ) {

				type( input.value );

			} );

			document.addEventListener( 'keyup', function ( event ) {

				type( input.value );

			} );

			document.addEventListener( 'mouseup', function ( event ) {

				input.focus();

			} );