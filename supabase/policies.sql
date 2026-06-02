alter table projects enable row level security;
alter table blog_posts enable row level security;
alter table messages enable row level security;

drop policy if exists "public read projects" on projects;
create policy "public read projects"
on projects for select using (true);

drop policy if exists "public read published posts" on blog_posts;
create policy "public read published posts"
on blog_posts for select using (published = true);

-- Messages: no public read (admin only via service role)
