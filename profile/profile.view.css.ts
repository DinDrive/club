namespace $.$$ {
	const rgba = (r: number, g: number, b: number, a: number) => `rgba(${r},${g},${b},${a})` as any

	$mol_style_define($club_profile, {
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
		padding: {
			top: '50px',
			bottom: '100px',
		},
		font: {
			size: '110%',
		},

		Card: {
			display: 'grid',
			gridTemplateColumns: '200px auto',
			columnGap: '20px',
			alignItems: 'flex-start',
			padding: '30px',
			border: {
				radius: '15px',
			},
			boxShadow: `10px 15px 40px ${rgba(83, 91, 110, 0.11)}`,
		},

		Card_photo: {
			display: 'flex',
			flex: {
				direction: 'column',
			},
			justify: {
				content: 'center',
			},
			align: {
				items: 'center',
			},
		},

		Card_avatar: {
			display: 'block',
			width: '100%',
			border: {
				radius: '0px',
			},
		},

		Card_info: {
			display: 'block',
			textAlign: 'left',
			font: {
				size: '110%',
			},
			padding: {
				top: '20px',
			},
			overflow: 'hidden',
		},

		Card_name_row: {
			display: 'block',
			font: {
				size: '170%',
				weight: 600,
			},
			padding: {
				bottom: '10px',
			},
		},

		Card_fullname: {
			display: 'inline',
			margin: {
				right: '15px',
			},
		},

		Card_nickname: {
			font: {
				weight: 300,
				size: '88%',
			},
			opacity: 0.4,
			display: 'inline',
		},

		Card_job: {
			display: 'block',
			font: {
				weight: 500,
			},
			padding: {
				bottom: '10px',
			},
		},

		Card_location: {
			display: 'block',
		},

		Card_bio: {
			display: 'block',
			opacity: 0.7,
			font: {
				size: '90%',
			},
		},

		Statuses: {
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'wrap',
			},
			justify: {
				content: 'center',
			},
			align: {
				items: 'stretch',
			},
			textAlign: 'center',
			font: {
				size: '120%',
			},
			padding: '0px',
			margin: {
				bottom: '30px',
			},
			overflow: 'hidden',
			background: {
				color: $mol_theme.card,
			},
			boxShadow: `10px 15px 40px ${rgba(83, 91, 110, 0.11)}`,
			border: {
				radius: '15px',
			},
		},

		Status_respect: {
			display: 'flex',
			flex: {
				direction: 'column',
			},
			justify: {
				content: 'center',
			},
			align: {
				items: 'center',
			},
			width: '25%',
			minWidth: '120px',
			padding: '20px',
		},

		Respect_number: {
			font: {
				size: '180%',
				weight: 500,
			},
		},

		Status_membership: {
			display: 'flex',
			flex: {
				direction: 'column',
			},
			justify: {
				content: 'center',
			},
			align: {
				items: 'center',
			},
			width: '25%',
			minWidth: '120px',
			padding: '20px',
		},

		Membership_number: {
			font: {
				size: '180%',
				weight: 500,
			},
		},

		Intro_section: {
			padding: {
				top: '50px',
				right: '30px',
				bottom: '50px',
				left: '30px',
			},
			background: {
				color: $mol_theme.card,
			},
			boxShadow: `10px 15px 40px ${rgba(83, 91, 110, 0.11)}`,
			border: {
				radius: '15px',
			},
		},

		Intro_header: {
			font: {
				size: '150%',
				weight: 700,
			},
			textAlign: 'center',
			padding: {
				bottom: '20px',
			},
		},

		Intro_text: {
			font: {
				size: '110%',
			},
			lineHeight: '1.5em',
			overflow: 'hidden',
		},

		Tags_section: {
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'wrap',
			},
			justify: {
				content: 'center',
			},
			align: {
				items: 'flex-start',
			},
			gap: '0.5rem',
			padding: {
				top: '30px',
				bottom: '30px',
			},
			background: {
				color: $mol_theme.card,
			},
			boxShadow: `10px 15px 40px ${rgba(83, 91, 110, 0.11)}`,
			border: {
				radius: '15px',
			},
		},

		Posts_title: {
			font: {
				size: '150%',
				weight: 700,
			},
			textAlign: 'center',
			padding: {
				top: '40px',
				bottom: '20px',
			},
		},
	})
}
