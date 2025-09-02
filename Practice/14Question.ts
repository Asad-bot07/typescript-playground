// 14. Show the difference between type and interface with a small example.
type asad = {
    name : String
}
// type asad1 extends asad {} // error as we cannot extend types

interface Asad{
    name : String
}
interface Asad1 extends Asad{} // where as we can extend interface