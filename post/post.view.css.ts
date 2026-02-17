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

		Article: {
			display: 'block',
			position: 'relative',
			maxWidth: '800px',
			margin: {
				top: '70px',
				left: 'auto',
				right: 'auto',
			},
		},

		Article_header: {
			display: 'block',
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
			maxWidth: '100%',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
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
			padding: {
				top: '20px',
				bottom: '20px',
			},
			maxWidth: '100%',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
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
			display: 'block',
			maxWidth: '800px',
			margin: {
				left: 'auto',
				right: 'auto',
			},
			padding: {
				top: '80px',
			},
		},

		Comments_title: {
			font: {
				size: '110%',
				weight: 500,
			},
			display: 'flex',
			flex: {
				direction: 'row',
			},
			justify: {
				content: 'space-between',
			},
		},

		Comments_count: {
			font: {
				size: '160%',
			},
			textDecoration: 'none',
		},

		Comments_list: {
			padding: {
				top: '25px',
				bottom: '40px',
			},
		},

		Battle_title: {
			display: 'grid',
			gridTemplateColumns: 'minmax(auto, 1fr) 50px minmax(auto, 1fr)',
			maxWidth: '100%',
			overflow: 'hidden',
			font: {
				size: '250%',
				weight: 500,
			},
			color: '#FFF',
			margin: {
				top: '50px',
				bottom: '20px',
			},
			minHeight: '140px',
		},

		Battle_side_a: {
			gridColumn: '1 / 2',
			gridRow: '1 / 2',
			display: 'flex',
			align: {
				items: 'center',
			},
			justify: {
				content: 'center',
			},
			padding: '30px',
			background: {
				color: '#4C98D5',
			},
			textAlign: 'center',
		},

		Battle_vs: {
			gridColumn: '2 / 3',
			gridRow: '1 / 2',
			position: 'relative',
			display: 'flex',
			align: {
				items: 'center',
			},
			justify: {
				content: 'center',
			},
			background: 'linear-gradient(108deg, #4C98D5 0%, #4C98D5 49%, #53AA68 50%, #53AA68 100%)' as any,
		},

		Battle_vs_text: {
			font: {
				size: '70%',
			},
			opacity: 0.7,
		},

		Battle_side_b: {
			gridColumn: '3 / 4',
			gridRow: '1 / 2',
			display: 'flex',
			align: {
				items: 'center',
			},
			justify: {
				content: 'center',
			},
			padding: '30px',
			background: {
				color: '#53AA68',
			},
			textAlign: 'center',
		},

		Battle_stats: {
			textAlign: 'center',
			padding: {
				top: '10px',
				bottom: '20px',
			},
		},

		Battle_stats_args: {
			font: {
				size: '180%',
			},
			display: 'flex',
			justify: {
				content: 'space-between',
			},
			padding: {
				top: '10px',
				bottom: '20px',
			},
		},

		Battle_args_a: {
			color: '#4C98D5',
			font: {
				weight: 700,
			},
		},

		Battle_args_b: {
			color: '#53AA68',
			font: {
				weight: 700,
			},
		},

		Battle_stats_graph: {
			display: 'flex',
			height: '10px',
			border: {
				radius: '15px',
			},
			overflow: 'hidden',
		},

		Battle_graph_a: {
			flex: {
				grow: 1,
			},
			background: {
				color: '#4C98D5',
			},
		},

		Battle_graph_b: {
			flex: {
				grow: 1,
			},
			background: {
				color: '#53AA68',
			},
		},

		Room_badge: {
			display: 'inline-block',
			font: {
				size: '90%',
			},
			opacity: 0.6,
		},
	})
}
