	($.$club_post) = class $club_post extends ($.$mol_page) {
		Upvote(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.upvotes()));
			return obj;
		}
		Title(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.post_title()));
			return obj;
		}
		Article(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.text()));
			return obj;
		}
		DatePublished(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.date_published()));
			return obj;
		}
		DateModified(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.date_modified()));
			return obj;
		}
		Info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.DatePublished()), (this.DateModified())]);
			return obj;
		}
		AuthorAvatar(id){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.author_avatar(id)));
			return obj;
		}
		AuthorName(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.author_name(id)));
			return obj;
		}
		Author(id){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.author_url(id)));
			(obj.title) = () => ((this.author_name(id)));
			(obj.sub) = () => ([(this.AuthorAvatar(id)), (this.AuthorName(id))]);
			return obj;
		}
		list_authors(){
			return [(this.Author("0"))];
		}
		Authors(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.list_authors()));
			return obj;
		}
		post_title(next){
			if(next !== undefined) return next;
			return "";
		}
		authorization(next){
			if(next !== undefined) return next;
			return false;
		}
		post_url(){
			return "";
		}
		comments_url(){
			return "";
		}
		text(){
			return "";
		}
		date_published(){
			return "";
		}
		date_modified(){
			return "";
		}
		author_url(id){
			return "";
		}
		author_name(id){
			return "";
		}
		author_avatar(id){
			return "";
		}
		upvotes(){
			return "";
		}
		head(){
			return [(this.Upvote()), (this.Title())];
		}
		body(){
			return [
				(this.Article()), 
				(this.Info()), 
				(this.Authors())
			];
		}
	};
	($mol_mem(($.$club_post.prototype), "Upvote"));
	($mol_mem(($.$club_post.prototype), "Title"));
	($mol_mem(($.$club_post.prototype), "Article"));
	($mol_mem(($.$club_post.prototype), "DatePublished"));
	($mol_mem(($.$club_post.prototype), "DateModified"));
	($mol_mem(($.$club_post.prototype), "Info"));
	($mol_mem_key(($.$club_post.prototype), "AuthorAvatar"));
	($mol_mem_key(($.$club_post.prototype), "AuthorName"));
	($mol_mem_key(($.$club_post.prototype), "Author"));
	($mol_mem(($.$club_post.prototype), "Authors"));
	($mol_mem(($.$club_post.prototype), "post_title"));
	($mol_mem(($.$club_post.prototype), "authorization"));

//# sourceMappingURL=post.view.tree.js.map