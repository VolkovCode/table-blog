import {Search} from "../../components/Search/Search";
import {TableContent} from "../../components/TableContent/ui/TableContent";
import {TableHead} from "../../components/TableHead/ui/TableHead";


export const TablePage = () => {
    return (
        <>
            <Search />
            <table>
                <TableHead />
                <TableContent />
            </table>
         </>
    )
}