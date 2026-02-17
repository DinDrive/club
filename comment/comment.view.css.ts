namespace $.$$ {
	$mol_style_define($club_comment, {
		display: 'grid',
		gridTemplateColumns: '60px minmax(auto, 1fr) 60px',
		gridTemplateRows: 'min-content auto min-content',
		padding: '20px',
		margin: {
			top: '20px',
		},
		border: {
			radius: '15px',
		},
		position: 'relative',

		Side: {
			gridColumn: '1 / 2',
			gridRow: '1 / 5',
			justifySelf: 'start',
			alignSelf: 'stretch',
			position: 'relative',
			padding: {
				top: '3px',
			},
			cursor: 'pointer',
		},

		Avatar_link: {
			display: 'block',
		},

		Avatar: {
			display: 'block',
			width: '42px',
			height: '42px',
			border: {
				radius: '50%',
			},
			objectFit: 'cover',
		},

		Thread_ruler: {
			display: 'block',
			height: 'calc(100% - 51px)' as any,
			width: '15px',
			position: 'absolute',
			top: '51px',
			left: '50%',
			bottom: '0px',
			border: {
				left: {
					width: '2px',
					style: 'dotted',
					color: $mol_theme.line,
				},
			},
			margin: {
				left: '-1px',
			},
			opacity: 0.15,
		},

		Header: {
			gridColumn: '2 / 3',
			gridRow: '1 / 2',
			justifySelf: 'start',
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'wrap',
			},
			alignContent: 'stretch',
			alignItems: 'stretch',
			padding: {
				bottom: '5px',
			},
		},

		Author_block: {
			display: 'block',
			width: '100%',
			font: {
				size: '115%',
			},
		},

		Author_name: {
			font: {
				weight: 500,
			},
			padding: {
				right: '5px',
			},
			display: 'inline',
		},

		Author_position: {
			opacity: 0.7,
			display: 'inline',
		},

		Post_link_block: {
			display: 'block',
			font: {
				size: '90%',
			},
			opacity: 0.7,
		},

		Post_link_prefix: {
			display: 'inline',
			padding: {
				right: '5px',
			},
		},

		Post_link: {
			display: 'inline',
			font: {
				weight: 500,
			},
			textDecoration: 'underline',
		},

		Date: {
			textDecoration: 'none',
			opacity: 0.7,
			font: {
				size: '90%',
			},
		},

		Rating: {
			gridColumn: '3 / 4',
			gridRow: '1 / 3',
			justifySelf: 'end',
			padding: {
				right: '8px',
			},
			font: {
				weight: 'bold',
				size: '0.9rem',
			},
			color: $mol_theme.text,
		},

		Body: {
			gridColumn: '2 / 4',
			gridRow: '2 / 3',
			padding: {
				top: '10px',
				right: '15px',
			},
			lineHeight: '1.67',
			font: {
				size: '115%',
				family: `Georgia, "Times New Roman", serif`,
			},
		},

		Footer: {
			gridColumn: '2 / 4',
			gridRow: '3 / 4',
			justifyContent: 'flex-end',
			display: 'flex',
			padding: {
				top: '5px',
			},
		},
	})
}
