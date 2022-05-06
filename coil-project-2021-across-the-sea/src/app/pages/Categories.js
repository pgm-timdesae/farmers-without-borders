import { BaseLayout } from "../layouts";

const CategoriesPage = ({ cart }) => {
  return (
    <BaseLayout cart={cart}>
      <h1>Category page</h1>
    </BaseLayout>
  );
};

export default CategoriesPage;
