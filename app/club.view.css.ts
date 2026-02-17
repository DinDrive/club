namespace $.$$ {
	$mol_style_define($club, {
		font: {
			family: `"Ubuntu", Helvetica, Verdana, sans-serif`,
			size: '15px',
		},
		lineHeight: '1.42',

		Header: {
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
			width: '100%',
			maxWidth: '1000px',
			margin: {
				left: 'auto',
				right: 'auto',
			},
			padding: {
				top: '25px',
				bottom: '15px',
				left: '0px',
				right: '0px',
			},
			boxSizing: 'border-box',
			font: {
				size: '120%',
			},
			gap: '10px',
		},

		Logo_block: {
			display: 'flex',
			flex: {
				direction: 'row',
				grow: 1,
			},
			align: {
				items: 'center',
			},
			gap: '10px',
			minWidth: '210px',
		},

		Logo: {
			display: 'flex',
			flex: {
				direction: 'row',
			},
			align: {
				items: 'center',
			},
			gap: '10px',
			textDecoration: 'none',
		},

		Search: {
			flex: {
				grow: 4,
			},
			whiteSpace: 'nowrap',
		},

		Logo_img: {
			width: '1em',
			height: '1em',
			verticalAlign: 'middle',
			margin: {
				left: '8px',
				right: '8px',
			},
			position: 'relative',
			top: '-2px',
		},

		Logo_left: {
			font: {
				size: '26px',
				weight: 700,
			},
			whiteSpace: 'nowrap',
		},

		Logo_right: {
			font: {
				size: '26px',
				weight: 700,
			},
			whiteSpace: 'nowrap',
		},

		Menu_right: {
			display: 'flex',
			flex: {
				grow: 1,
				direction: 'row',
			},
			justify: {
				content: 'flex-end',
			},
			align: {
				items: 'center',
			},
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
			padding: '0px',
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
			boxSizing: 'content-box',
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

		Footer: {
			display: 'flex',
			flex: {
				direction: 'column',
			},
			justify: {
				content: 'space-between',
			},
			maxWidth: '1000px',
			margin: {
				top: '200px',
				left: 'auto',
				right: 'auto',
				bottom: '0px',
			},
			padding: {
				top: '50px',
				left: '20px',
				right: '20px',
				bottom: '100px',
			},
		},

		Footer_left: {
			display: 'flex',
			flex: {
				wrap: 'wrap',
			},
			gap: '5px',
		},

		Footer_right: {
			display: 'flex',
			flex: {
				direction: 'column',
			},
			justify: {
				content: 'space-between',
			},
			align: {
				items: 'flex-end',
			},
		},

		Footer_cc: {
			width: '100%',
			padding: {
				top: '15px',
			},
		},
	})
}
