	($.$club_main) = class $club_main extends ($.$mol_page) {
		Title1(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("# Вастрик");
			return obj;
		}
		Logo(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.logo_url()));
			return obj;
		}
		Title2(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("# Клуб");
			return obj;
		}
		Source_icon(){
			const obj = new this.$.$mol_icon_github();
			return obj;
		}
		Source(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ("https://github.com/DinDrive/club");
			(obj.sub) = () => ([(this.Source_icon())]);
			return obj;
		}
		Lighter(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		Settings_icon(){
			const obj = new this.$.$mol_icon_cog_outline();
			return obj;
		}
		Settings(){
			const obj = new this.$.$mol_check_icon();
			(obj.Icon) = () => ((this.Settings_icon()));
			(obj.hint) = () => ("Настройки");
			(obj.checked) = (next) => ((this.settings(next)));
			return obj;
		}
		Tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Source()), 
				(this.Lighter()), 
				(this.Settings())
			]);
			return obj;
		}
		Pag1(){
			const obj = new this.$.$mol_paginator();
			(obj.value) = (next) => ((this.page_number(next)));
			return obj;
		}
		Upvote(id){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.post_upvotes(id)));
			return obj;
		}
		PostTitle(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.post_title(id))]);
			return obj;
		}
		Post(id){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"post": (this.post_url(id))});
			(obj.sub) = () => ([(this.Upvote(id)), (this.PostTitle(id))]);
			return obj;
		}
		list_posts(){
			return [(this.Post("0"))];
		}
		Posts(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.list_posts()));
			return obj;
		}
		Pag2(){
			const obj = new this.$.$mol_paginator();
			(obj.value) = (next) => ((this.page_number(next)));
			return obj;
		}
		Scroll(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Pag1()), 
				(this.Posts()), 
				(this.Pag2())
			]);
			return obj;
		}
		Scll(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Scroll())]);
			return obj;
		}
		page_number(next){
			if(next !== undefined) return next;
			return 1;
		}
		post_url(id){
			return "";
		}
		post_title(id){
			return "";
		}
		post_upvotes(id){
			return "";
		}
		logo_url(){
			return "";
		}
		settings(next){
			if(next !== undefined) return next;
			return false;
		}
		head(){
			return [
				(this.Title1()), 
				(this.Logo()), 
				(this.Title2()), 
				(this.Tools())
			];
		}
		body(){
			return [(this.Scll())];
		}
	};
	($mol_mem(($.$club_main.prototype), "Title1"));
	($mol_mem(($.$club_main.prototype), "Logo"));
	($mol_mem(($.$club_main.prototype), "Title2"));
	($mol_mem(($.$club_main.prototype), "Source_icon"));
	($mol_mem(($.$club_main.prototype), "Source"));
	($mol_mem(($.$club_main.prototype), "Lighter"));
	($mol_mem(($.$club_main.prototype), "Settings_icon"));
	($mol_mem(($.$club_main.prototype), "Settings"));
	($mol_mem(($.$club_main.prototype), "Tools"));
	($mol_mem(($.$club_main.prototype), "Pag1"));
	($mol_mem_key(($.$club_main.prototype), "Upvote"));
	($mol_mem_key(($.$club_main.prototype), "PostTitle"));
	($mol_mem_key(($.$club_main.prototype), "Post"));
	($mol_mem(($.$club_main.prototype), "Posts"));
	($mol_mem(($.$club_main.prototype), "Pag2"));
	($mol_mem(($.$club_main.prototype), "Scroll"));
	($mol_mem(($.$club_main.prototype), "Scll"));
	($mol_mem(($.$club_main.prototype), "page_number"));
	($mol_mem(($.$club_main.prototype), "settings"));

//# sourceMappingURL=main.view.tree.js.map