interface IFooterToolbar {
  placeholderHeight: number;
  children: React.ReactNode;
  className?: string;
}

interface IPageLayout {
  children: React.ReactNode;
  useModel?: {
    loading?: boolean;
    success?: boolean;
    msg?: string;
    onRefetch?: () => void;
  };
}

interface ILoading {
  text?: string;
}
