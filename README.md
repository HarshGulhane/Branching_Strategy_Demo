# Simple Blog Project - Git Branching Demo

This project demonstrates a **basic Git branching strategy** using these branches:

- `main`: Production-ready code. The blog as visitors see it live.
- `develop`: Integration branch for features. New blog posts or style updates get merged here first.
- `feature/<name>`: For working on specific features or blog posts before merging to develop.
- `release/<version>`: Preparation for a new release, bug fixes, polishing before merging into main and develop.


## Git Workflow Example

1. Clone the repo and checkout `develop` branch (or create it if not exists):

git checkout -b develop
```
2. Create a new feature branch:
```
git checkout -b feature/new-post develop
```
3. Work on your new post (edit or add files). Then stage and commit changes:
```
git add .
git commit -m "Add new blog post feature"
```
4. Merge feature branch into develop:
```
git checkout develop
git merge feature/new-post
```
5. When ready, create a release branch:
```
git checkout -b release/v1.0 develop
```
6. Test, polish, then merge into main and develop:
```
git checkout main
git merge release/v1.0

git checkout develop
git merge release/v1.0
```
7. Push all branches to remote:
```
git push origin main develop release/v1.0
```

---

Feel free to extend this project by adding more blog posts or pages and practicing the branching workflow!