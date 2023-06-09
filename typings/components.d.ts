interface IFooterToolbar {
  placeholderHeight?: number;
  children: React.ReactNode;
  className?: string;
  placeholderClassName?: string;
}

interface IUseModel {
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

interface FormConfig {
  id?: number;
}
