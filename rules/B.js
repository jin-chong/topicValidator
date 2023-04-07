// If topic == B, then name will be “x” and description will be less than 40 chars
export default (obj) => {
    const { name, description } = obj;
    let errs = [];
    if (name !== 'x') {
        errs.push(`name should be 'x' but it is '${name}'.`);
    }
    if (!description || description.length > 40) {
        errs.push(`description's length should be less than 40 chars, but it is ${description?.length}.`);
    }
    return errs.length > 0 ? errs : null;
}
