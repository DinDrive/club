	($.$club_post) = class $club_post extends ($.$mol_page) {
		DatePublished(){
			const obj = new this.$.$mol_date();
			(obj.value) = () => ((this.date_published()));
			return obj;
		}
		DateModified(){
			const obj = new this.$.$mol_date();
			(obj.value) = () => ((this.date_modified()));
			return obj;
		}
		Header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.DatePublished()), (this.DateModified())]);
			return obj;
		}
		Article(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.text()));
			return obj;
		}
		CommentTitle(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.$.$mol_locale.text("$club_post_CommentTitle_title")));
			return obj;
		}
		comment_text(id){
			return "";
		}
		Item(id){
			const obj = new this.$.$mol_link();
			(obj.title) = () => ((this.comment_text(id)));
			return obj;
		}
		list_items(){
			return [(this.Item("0"))];
		}
		Items(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.list_items()));
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
		title(){
			return (this.post_title());
		}
		body(){
			return [
				(this.Header()), 
				(this.Article()), 
				(this.CommentTitle()), 
				(this.Items())
			];
		}
	};
	($mol_mem(($.$club_post.prototype), "DatePublished"));
	($mol_mem(($.$club_post.prototype), "DateModified"));
	($mol_mem(($.$club_post.prototype), "Header"));
	($mol_mem(($.$club_post.prototype), "Article"));
	($mol_mem(($.$club_post.prototype), "CommentTitle"));
	($mol_mem_key(($.$club_post.prototype), "Item"));
	($mol_mem(($.$club_post.prototype), "Items"));
	($mol_mem(($.$club_post.prototype), "post_title"));
	($mol_mem(($.$club_post.prototype), "authorization"));

//# sourceMappingURL=post.view.tree.js.map