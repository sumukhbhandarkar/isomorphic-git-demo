#git commit
let sha = await git.commit({
  fs,
  dir: '/tutorial',
  author: {
    name: 'Mr. Test',
    email: 'mrtest@example.com',
  },
  message: 'Added the a.txt file'
})
console.log(sha)


#git push
let pushResult = await git.push({
  fs,
  http,
  dir: '/tutorial',
  remote: 'origin',
  ref: 'main',
  onAuth: () => ({ username: process.env.GITHUB_TOKEN }),
})
console.log(pushResult)

