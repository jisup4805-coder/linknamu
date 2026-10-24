export const profile = {
  name: "이지섭",
  bio: "세계 최강 바이브코더",
  // 사진을 넣으려면 public/ 에 이미지를 두고 경로를 지정하세요. (예: "/profile.jpg")
  photo: null as string | null,
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com" },
];
