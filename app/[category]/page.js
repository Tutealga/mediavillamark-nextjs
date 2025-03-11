import Categories from "@/components/Categories";
import NotFound from "@/components/NotFound";

const categories = ['preparados', 'cortes-vacunos', 'embutidos']

const Category = ({params}) => {
const {category} = params

  return (
    <>
         {
          categories.includes(category)
          ?
          <Categories category={category}/>
          :
          <NotFound />
          }
    </>  
    )
}

export default Category