export default (obj) => {
    const { name, description } = obj;
    let errs = [];
    if (name !== 'Z') {
        errs.push(`name should be 'Z' but it is '${name}'.`);
    }
    return errs.length > 0 ? errs : null;
}
