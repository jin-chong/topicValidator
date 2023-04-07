// If topic == A, then name will be “a”and description will be more than 10 and less than 100 chars
export default (obj) => {
    const { name, description } = obj;
    let errs = [];
    if (name !== 'a') {
        errs.push(`name should be 'a' but it is '${name}'.`);
    }
    if (!description || description.length < 10 || description.length > 100) {
        errs.push(`description's length should be more than 10 and less than 100 chars, but it is ${description?.length}.`);
    }
    return errs.length > 0 ? errs : null;
}
