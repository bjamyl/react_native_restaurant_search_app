import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer VfkrNgiq04LgIrIKO6fPoQ01IKCuQ3npNmvCj7ub3pyAa30o7JQqezwJZP0ixFODzJOFTnW8VfX8sm92WSF6ooTnnuyvy6WQU25g4VXy-8iZp2h6tOXMHZiz91t_YnYx'
    }
});