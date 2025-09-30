import Sidebar from './components/Sidebar';
import ProgressBar from './components/ProgressBar';
import TopicSection from './components/TopicSection';
import topics from './data/topics';

function App() {
  const [currentTopic, setCurrentTopic] = React.useState(topics[0].id);

  return (
    <div className="flex h-screen pt-12">
      <Sidebar currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} topics={topics} />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <ProgressBar currentTopic={currentTopic} totalTopics={topics.length} />
        <TopicSection topic={topics.find(t => t.id === currentTopic)} />
      </main>
    </div>
  );
}

export default App;