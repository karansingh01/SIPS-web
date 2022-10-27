"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const fa_1 = require("react-icons/fa");
function SearchBar({ q, setQuery, }) {
    return (<react_1.Stack spacing={4}>
      <react_1.InputGroup>
        <react_1.InputLeftElement pointerEvents="none" children={<fa_1.FaSearch color="beige"/>}/>
        <react_1.Input type={"search"} placeholder="What drink are you looking for?" color={"beige"} value={q} onChange={(e) => setQuery(e.target.value)}/>
      </react_1.InputGroup>
    </react_1.Stack>);
}
exports.default = SearchBar;
