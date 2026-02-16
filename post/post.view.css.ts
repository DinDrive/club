namespace $.$$ {
	const rgba = (r: number, g: number, b: number, a: number) => `rgba(${r},${g},${b},${a})` as any

	$mol_style_define($club_post, {
		flex: {
			grow: 1,
		},
		boxShadow: 'none',
		border: {
			radius: '0px',
		},
		background: {
			color: 'transparent',
		},

		Head: {
			gap: '0.5rem',
			align: {
				items: 'center',
			},
		},

		Title: {
			font: {
				size: '1.2rem',
				weight: 700,
			},
			flex: {
				grow: 1,
			},
		},

		Article: {
			display: 'grid',
			gridTemplateColumns: 'minmax(auto, 1fr) min-content',
			gridTemplateRows: 'auto auto auto',
			maxWidth: '700px',
			margin: {
				top: '70px',
				left: 'auto',
				right: 'auto',
			},
		},

		Article_header: {
			gridColumn: '1 / 2',
			gridRow: '1 / 2',
		},

		Post_title_block: {
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'wrap',
			},
			align: {
				items: 'center',
			},
			gap: '0.5rem',
		},

		Post_title_text: {
			display: 'inline',
			font: {
				size: '200%',
				weight: 500,
			},
			lineHeight: '1.2em',
			margin: {},
		},

		Post_publicity: {
			display: 'inline-block',
			font: {
				size: '100%',
				weight: 300,
			},
			opacity: 0.6,
		},

		Post_info: {
			padding: {
				top: '7px',
			},
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'wrap',
			},
			align: {
				items: 'flex-start',
			},
			gap: '10px',
		},

		Post_actions: {
			display: 'flex',
			flex: {
				direction: 'row',
			},
			gap: '15px',
			opacity: 0.6,
		},

		Upvote: {
			gridColumn: '2 / 3',
			gridRow: '1 / 2',
			justifySelf: 'end',
			padding: {
				left: '10px',
				top: '30px',
				right: '17px',
				bottom: '7px',
			},
			font: {
				size: '140%',
				weight: 600,
				family: `"Ubuntu", Helvetica, Verdana, sans-serif`,
			},
			background: {
				color: $mol_theme.back,
			},
			color: $mol_theme.text,
			border: {
				width: '2px',
				style: 'solid',
				color: $mol_theme.text,
				radius: '15px',
			},
			cursor: 'pointer',
			whiteSpace: 'nowrap',
		},

		Text_body: {
			gridColumn: '1 / 3',
			gridRow: '2 / 3',
			padding: {
				top: '30px',
			},
			font: {
				size: '19px',
				family: `Georgia, "Times New Roman", serif`,
			},
			lineHeight: '1.67',
		},

		Post_footer: {
			gridColumn: '1 / 3',
			gridRow: '3 / 4',
			display: 'grid',
			gridTemplateColumns: '55px auto',
			gridTemplateRows: 'auto auto',
			padding: {
				top: '40px',
			},
			margin: {
				top: '70px',
			},
			gap: '0px',
		},

		Author_avatar: {
			gridColumn: '1 / 2',
			gridRow: '1 / 3',
			width: '42px',
			height: '42px',
			border: {
				radius: '50%',
			},
			objectFit: 'cover',
		},

		Author_info: {
			gridColumn: '2 / 3',
			gridRow: '1 / 2',
		},

		Author_name: {
			font: {
				weight: 500,
			},
			display: 'inline',
		},

		Author_position: {
			display: 'inline',
			opacity: 0.7,
		},

		Footer_date: {
			gridColumn: '2 / 3',
			gridRow: '2 / 3',
			font: {
				size: '0.85rem',
			},
			color: $mol_theme.shade,
		},

		Comments_section: {
			maxWidth: '700px',
			margin: {
				left: 'auto',
				right: 'auto',
			},
			padding: {
				top: '80px',
			},
		},

		Comments_count: {
			font: {
				size: '160%',
				weight: 500,
			},
			textDecoration: 'none',
		},

		Comments_list: {
			padding: {
				top: '25px',
				bottom: '40px',
			},
		},
	})
}
