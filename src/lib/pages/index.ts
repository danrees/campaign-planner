export interface Page {
	id: string;
	parent_page?: Page;
	title: string;
	content: string;
}

export type SubPage = Omit<Page, 'content'>;
