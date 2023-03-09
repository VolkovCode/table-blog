import { Search } from '../../components/Search/Search';
import { TableContent } from '../../components/TableContent/ui/TableContent';
import { TableHead } from '../../components/TableHead/ui/TableHead';
import { PaginationList } from '../../components/PaginationList/PaginationList';

export const TablePage = () => {
  return (
    <>
      <Search />
      <table>
        <TableHead />
        <TableContent />
      </table>
      <PaginationList />
    </>
  );
};
