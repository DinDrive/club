namespace $.$$ {
	const SIDEBAR_ROOMS = [
		{
			slug: 'ai',
			title: 'ИИ',
			color: '#7cb46b',
			icon: 'https://i.vas3k.club/ff4fd9958ce2dd1a88f1a05a8b1b21096393961bb15cf7b82cae5ccdf0534e3a.jpg',
		},
		{ slug: 'stonks', title: 'STONKS', color: '#45ADA8', icon: 'https://i.vas3k.ru/lr6.jpg' },
		{
			slug: 'indie',
			title: 'Индихакеры',
			color: '#f37735',
			icon: 'https://i.vas3k.club/f19aa843188c1fbf72d7f943517f55451c43e0538d55da16a9bd11cb8d16f6a5.jpg',
		},
		{
			slug: 'gamedev',
			title: 'Геймдев',
			color: '#f37735',
			icon: 'https://i.vas3k.club/9e6ec0f61bd602394da6f9fead5dc8c7cc0cc60f14124b0d649f686f258b198d.jpg',
		},
		{
			slug: 'manager',
			title: 'Менеджеры',
			color: '#0052CC',
			icon: 'https://i.vas3k.club/f0a3a152019cd6312cafc28829230edb414534b000475bfbbada15f1541b7557.jpg',
		},
		{
			slug: 'pl',
			title: 'Польша',
			color: '#DC143C',
			icon: 'https://i.vas3k.club/c606b737a7405d970b11f595a2d8451c6b63c1f7e3c155e3919546a4e919fb2e.jpg',
		},
		{
			slug: 'whiteboard',
			title: 'Вайтборд',
			color: '#1cb981',
			icon: 'https://i.vas3k.club/f9b9db8b56df48ab04a7bd9d65b78a78a7aa42007640d39c81b80d491069b9be.jpg',
		},
		{
			slug: 'tech',
			title: 'Тех',
			color: '#2776EA',
			icon: 'https://i.vas3k.club/83bf7edf657eb6424aec7f20ace82df690125e064f985fc2be73886234b1011b.jpg',
		},
		{ slug: 'kitchen', title: 'Кухня', color: '#E86850', icon: '' },
	]

	export class $club_menu extends $.$club_menu {
		@$mol_mem
		room_cards() {
			return SIDEBAR_ROOMS.map((room, i) => {
				const card = this.Room_card(i)
				card.room_slug = () => room.slug
				card.room_title = () => room.title
				card.room_color = () => room.color
				card.room_icon = () => room.icon
				return card
			})
		}
	}
}
