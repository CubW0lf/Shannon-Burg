import ContentLoader from "react-content-loader";

const ArticlesLoader = (props) => (
  <ContentLoader
    width={1920}
    height={1000}
    viewBox="0 0 1920 1000"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="537" y="9" rx="2" ry="2" width="140" height="10" />
    <rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
    <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
    <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
    <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
    <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
    <circle cx="286" cy="536" r="12" />
    <circle cx="319" cy="535" r="12" />
    <circle cx="353" cy="535" r="12" />
    <rect x="378" y="524" rx="0" ry="0" width="52" height="24" />
    <rect x="210" y="523" rx="0" ry="0" width="52" height="24" />
    <circle cx="210" cy="535" r="12" />
    <circle cx="428" cy="536" r="12" />
  </ContentLoader>
);

export default ArticlesLoader;
