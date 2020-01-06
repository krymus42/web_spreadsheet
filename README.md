# web_spreadsheet

###My checklist:
1.Simple excel syntax based spreadsheet.
2.Easy to put on your website.
3.Easy inserting data to your database.
4.Loading data from _relational_ database.
5.Loading data from excel stylesheet.
6.Spreadsheet already styled with css, but user can pass his own style which will override current one.

###Ideas that may (or may not,depending on various circumstances) be included in project:
1.NoSQL support. For example : simple mongodb structures are in sense similar to MySql tables.General idea of what i'm thinking about:
MongoDB doc:
`
{
alone_cell: data_about_alone_cell,
table_column:[table_cell],
}
`
_table_cell_  will for sure contain value (I'm counting formulas as value, of course they will be stored in raw version, not in one after calculation), but it may also be needed to store it as array of objects, this way:
`
{
table_column:[{
value,
position,
}],
}
`.


