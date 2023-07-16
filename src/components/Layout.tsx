interface ILayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

export default function Layout({
  pageTitle = "TypeScript React Axios Example",
  children,
}: ILayoutProps) {
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-12">
            <h1 className="text-center">{pageTitle}</h1>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
