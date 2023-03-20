import { useQueryString } from '../../../../hooks';
import { PageLayout } from '../../../../components';
import useModel from './model';
import FormConfig from '../components/form-config';

export default function AddressEdit() {
  const id = useQueryString<QueryStringKey>('id');
  const model = useModel();

  return (
    <PageLayout useModel={model}>
      <FormConfig id={Number(id)} />
    </PageLayout>
  );
}
