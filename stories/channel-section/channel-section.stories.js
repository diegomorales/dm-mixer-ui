export default {
  title: 'Components/Channel Section',
  render: (args) => {
    return `
      <section class="channel-section">
        <div class="header">
          <d-checkbox></d-checkbox>
          Label
        </div>
        <div style="background-color: paleturquoise; height: 200px; align-items: center; justify-content: center; display: flex; text-align: center">
          section content
        </div>
      </section>
    `
  },
}

export const channelSection = {
  args: {}
}
