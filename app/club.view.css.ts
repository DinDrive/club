namespace $.$$ {
	$mol_style_define($club, {
		font: {
			family: `"Ubuntu", Helvetica, Verdana, sans-serif`,
			size: '15px',
		},
		lineHeight: '1.42',

		Head: {
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'nowrap',
			},
			align: {
				items: 'center',
			},
			justify: {
				content: 'flex-start',
			},
			background: {
				color: 'transparent',
			},
			boxShadow: 'none',
			border: {
				radius: '0px',
			},
			position: 'relative',
			zIndex: 0,
			minHeight: '0px',
			maxWidth: '1000px',
			margin: {
				left: 'auto',
				right: 'auto',
			},
			padding: {
				top: '25px',
				bottom: '15px',
				left: '20px',
				right: '20px',
			},
			font: {
				size: '120%',
			},
			gap: '10px',
		},

		Logo: {
			display: 'flex',
			flex: {
				direction: 'row',
				grow: 1,
			},
			align: {
				items: 'center',
			},
			gap: '10px',
			textDecoration: 'none',
			minWidth: '210px',
		},

		Logo_img: {
			width: '1em',
			height: '1em',
			verticalAlign: 'middle',
		},

		Logo_text: {
			font: {
				size: '26px',
				weight: 700,
			},
			whiteSpace: 'nowrap',
		},

		Menu_compose: {
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'nowrap',
			},
			gap: '8px',
			align: {
				items: 'center',
			},
			padding: {
				top: '13px',
				right: '20px',
				bottom: '13px',
				left: '20px',
			},
			margin: {
				right: '10px',
			},
			cursor: 'pointer',
			font: {
				size: '80%',
			},
			textDecoration: 'none',
		},

		Menu_bookmarks: {
			font: {
				size: '110%',
			},
			opacity: 0.5,
			textDecoration: 'none',
			verticalAlign: 'middle',
		},

		Menu_avatar: {
			textDecoration: 'none',
		},

		User_avatar: {
			width: '40px',
			minWidth: '40px',
			height: '40px',
			border: {
				radius: '50%',
			},
			objectFit: 'cover',
			margin: {
				left: '10px',
			},
		},

		Body_content: {
			maxWidth: '100%',
		},

		Main: {
			display: 'grid',
			gridTemplateColumns: '250px 1fr',
			maxWidth: '1000px',
			minHeight: '100vh',
			margin: {
				left: 'auto',
				right: 'auto',
			},
			padding: {
				top: '10px',
				left: '20px',
				right: '20px',
				bottom: '50px',
			},
		},

		Sidebar: {
			boxShadow: 'none',
			background: {
				color: 'transparent',
			},
		},

		Content: {
			display: 'block',
			minWidth: '0px',
		},
	})
}
