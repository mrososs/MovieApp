export interface IMovie {
  title?: string; // Use optional properties since it could be title or name
  name?: string; // Use optional properties since it could be name or title
  overview: string;
  poster_path: string;
  media_type?: string; // Use optional properties since it could be title or name
}
