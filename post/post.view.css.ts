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
			display: 'block',
			position: 'relative',
			maxWidth: '700px',
			margin: {
				top: '70px',
				left: 'auto',
				right: 'auto',
			},
		},

		Article_header: {
			textAlign: 'center',
		},

		Post_title_block: {
			display: 'block',
			textAlign: 'center',
		},

		Post_title_text: {
			display: 'inline',
			font: {
				size: '300%',
				weight: 700,
			},
			lineHeight: '1.3em',
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
				top: '20px',
				bottom: '20px',
			},
			display: 'inline-flex',
			flex: {
				wrap: 'wrap',
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
			position: 'sticky',
			top: '30px',
			float: 'left',
			margin: {
				left: '-125px',
				top: '30px',
			},
			padding: {
				left: '20px',
				top: '30px',
				right: '20px',
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
			textAlign: 'center',
		},

		Text_body: {
			padding: {
				top: '30px',
			},
			font: {
				size: '19px',
				family: `"Merriweather", Georgia, "Times New Roman", serif`,
			},
			lineHeight: '1.67',
			letterSpacing: '0.01rem',
		},

		Post_footer: {
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

		Post_author: {
			font: {
				size: '110%',
			},
			padding: {
				bottom: '40px',
			},
		},

		Author_avatar_small: {
			display: 'inline-block',
			width: '30px',
			height: '30px',
			border: {
				radius: '50%',
			},
			objectFit: 'cover',
			verticalAlign: 'middle',
			margin: {
				right: '5px',
			},
		},

		Author_name: {
			font: {
				weight: 500,
			},
			display: 'inline',
		},

		Footer_avatar: {
			gridColumn: '1 / 2',
			gridRow: '1 / 3',
			width: '42px',
			height: '42px',
			border: {
				radius: '50%',
			},
			objectFit: 'cover',
		},

		Footer_info: {
			gridColumn: '2 / 3',
			gridRow: '1 / 2',
		},

		Footer_name: {
			font: {
				weight: 500,
			},
			display: 'inline',
		},

		Footer_position: {
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
